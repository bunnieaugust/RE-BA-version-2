'use client';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

export function BendText() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const sceneRef = useRef<{
        scene?: THREE.Scene;
        camera?: THREE.OrthographicCamera;
        renderer?: THREE.WebGLRenderer;
        animationId?: number;
        cleanup?: () => void;
    }>({});

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        if (!containerRef.current || !mounted) return;
        const isDark = theme === 'dark';

        const scene = new THREE.Scene();
        
        // [FIX QUAN TRỌNG 1]: Đổi tỷ lệ camera và đặt camera nhìn thẳng mặt (z=5, x=0, y=0) thay vì nghiêng góc
        const camera = new THREE.OrthographicCamera(-12, 12, 6, -6, 0.1, 1000);
        camera.position.set(0, 0, 5); 
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        const rect = containerRef.current.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);

        const createTextTexture = (text: string, blur = false) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')!;
            
            // [FIX QUAN TRỌNG 2]: Chuyển canvas thành hình chữ nhật (2:1) để chứa chữ dài
            canvas.width = 2048;
            canvas.height = 1024;
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.fillStyle = 'transparent';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const textColor = isDark ? '#ffffff' : '#1F2937';
            const shadowColor = isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.15)';

            // [FIX QUAN TRỌNG 3]: Tăng size chữ từ 160px lên 280px để to rõ hơn
            if (blur) {
                ctx.fillStyle = shadowColor;
                ctx.filter = 'blur(15px)';
                ctx.font = 'bold 280px "Playfair Display", serif'; 
            } else {
                ctx.fillStyle = textColor;
                ctx.font = 'bold 280px "Playfair Display", serif';
            }
            // Canh lề trái để chữ đi sát vào viền màn hình bên trái
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, 50, canvas.height / 2);

            const texture = new THREE.CanvasTexture(canvas);
            texture.generateMipmaps = false;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.needsUpdate = true;
            return texture;
        };

        const textTexture = createTextTexture('VỀ RE:BA');
        const shadowTexture = createTextTexture('VỀ RE:BA', true);

        const shaderMaterial = new THREE.ShaderMaterial({
            uniforms: { uTexture: { value: textTexture }, uDisplacement: { value: new THREE.Vector3(999, 999, 999) } },
            vertexShader: `
            varying vec2 vUv; uniform vec3 uDisplacement;
            float easeInOutCubic(float x) { return x < 0.5 ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) / 2.0; }
            float map(float value, float min1, float max1, float min2, float max2) { return min2 + (value - min1) * (max2 - min2) / (max1 - min1); }
            void main() {
              vUv = uv; vec3 newPosition = position;
              vec4 worldPosition = modelMatrix * vec4(position, 1.0);
              float dist = length(uDisplacement - worldPosition.xyz);
              // Cường độ nảy 3D mượt mà
              if (dist < 3.0) { newPosition.z += easeInOutCubic(map(dist, 0.0, 3.0, 1.0, 0.0)) * 1.8; }
              gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
            }
            `,
            fragmentShader: `varying vec2 vUv; uniform sampler2D uTexture; void main() { gl_FragColor = texture2D(uTexture, vUv); }`,
            transparent: true, depthWrite: false, side: THREE.DoubleSide
        });

        const shadowMaterial = new THREE.ShaderMaterial({
            uniforms: { uTexture: { value: shadowTexture }, uDisplacement: { value: new THREE.Vector3(999, 999, 999) } },
            vertexShader: `
            varying vec2 vUv; varying float dist; uniform vec3 uDisplacement;
            void main() { vUv = uv; dist = length(uDisplacement - (modelMatrix * vec4(position, 1.0)).xyz); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
            `,
            fragmentShader: `
            varying vec2 vUv; varying float dist; uniform sampler2D uTexture;
            float map(float value, float min1, float max1, float min2, float max2) { return min2 + (value - min1) * (max2 - min2) / (max1 - min1); }
            float easeOutQuad(float x) { return 1.0 - (1.0 - x) * (1.0 - x); }
            void main() {
              vec4 color = texture2D(uTexture, vUv);
              if (dist < 3.0) { color.a = easeOutQuad(map(dist, 0.0, 3.0, 1.0, 0.0)) * color.a * 0.8; } else { color.a = 0.0; }
              gl_FragColor = color;
            }
            `,
            transparent: true, depthWrite: false, side: THREE.DoubleSide
        });

        // [FIX QUAN TRỌNG 4]: Đổi tỷ lệ mặt phẳng thành hình chữ nhật (24x12) khớp với Canvas
        const geometry = new THREE.PlaneGeometry(24, 12, 150, 75); 
        const textMesh = new THREE.Mesh(geometry, shaderMaterial);
        const shadowMesh = new THREE.Mesh(geometry, shadowMaterial);
        shadowMesh.position.z = -0.1;
        scene.add(textMesh); scene.add(shadowMesh);

        const hitPlane = new THREE.Mesh(new THREE.PlaneGeometry(30, 20), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }));
        scene.add(hitPlane);

        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();

        const onPointerMove = (event: MouseEvent) => {
            const rect = containerRef.current!.getBoundingClientRect();
            pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(pointer, camera);
            const intersects = raycaster.intersectObject(hitPlane);
            if (intersects.length > 0) {
                shaderMaterial.uniforms.uDisplacement.value.copy(intersects[0].point);
                shadowMaterial.uniforms.uDisplacement.value.copy(intersects[0].point);
            }
        };

        const onPointerLeave = () => {
            const farPoint = new THREE.Vector3(999, 999, 999);
            shaderMaterial.uniforms.uDisplacement.value.copy(farPoint);
            shadowMaterial.uniforms.uDisplacement.value.copy(farPoint);
        };

        const animate = () => {
            sceneRef.current.animationId = requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        const container = containerRef.current;
        container.addEventListener('pointermove', onPointerMove);
        container.addEventListener('pointerleave', onPointerLeave);

        const handleResize = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const aspect = rect.width / rect.height;
            // Cập nhật lại camera khi resize để giữ đúng tỷ lệ thẳng
            camera.left = -12 * aspect; 
            camera.right = 12 * aspect;
            camera.updateProjectionMatrix();
            renderer.setSize(rect.width, rect.height);
        };
        window.addEventListener('resize', handleResize);
        animate();

        return () => { 
            container.removeEventListener('pointermove', onPointerMove);
            container.removeEventListener('pointerleave', onPointerLeave);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(sceneRef.current.animationId!);
            renderer.dispose();
        };
    }, [theme, mounted]);

    if (!mounted) return null;
    return (
        <div className="w-full relative h-full flex items-center justify-start cursor-default">
            <div ref={containerRef} className="w-full h-full absolute inset-0" />
        </div>
    );
}
