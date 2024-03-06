<script setup>
  import * as THREE from 'three';
  //导入轨道控制器
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
  camera.position.y = 2;
  camera.position.x = 2;
  camera.lookAt(0,0,0);

  //添加世界坐标辅助器
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  //添加轨道控制器
  const controls = new OrbitControls(camera, document.body);
  //设置阻尼-增加一点拖动惯性
  controls.enableDamping = true;
  //设置阻尼系数
  controls.dampingFactor = 0.25;
  //设置转速
  controls.rotateSpeed = 0.5;
  //设置自动旋转
  controls.autoRotate = true;


  //渲染场景
  function animate() {
      controls.update();
      requestAnimationFrame(animate);
      //旋转
      // cube.rotation.x += 0.1;
      // cube.rotation.y += 0.1;
      renderer.render(scene, camera);
  }
  //渲染
  animate();
</script>

<template>
  <div>
    
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  body{
    width: 100vw;
    height: 100vh;
  }

  canvas{
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>
