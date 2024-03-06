import * as THREE from 'three';

//创建场景
const scene = new THREE.Scene();

//创建透视相机
const camera = new THREE.PerspectiveCamera(
    45, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);

//创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1);
//创建材质
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
//创建网格对象
const cube = new THREE.Mesh(geometry, material);
//将网格对象添加到场景中
scene.add(cube);
//设置相机位置
camera.position.z = 5;

//渲染场景
function animate() {
    requestAnimationFrame(animate);
    //旋转
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
}
//渲染
animate();