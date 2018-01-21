import * as THREE from 'three'
import { GyroNorm } from '../vendor/gyronorm.complete.min'

const toRadian = angle => angle * (Math.PI / 180)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshNormalMaterial({ color: 0xffff00 })
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)
camera.position.z = 5
  cube.rotation.y = 1

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

animate()

const gn = new GyroNorm()

gn.init().then(function () {
  gn.start(function (data) {
    const alpha = toRadian(data.do.alpha)
    const beta = toRadian(data.do.beta)
    const gamma = toRadian(data.do.gamma)

    cube.rotation.x = beta
    cube.rotation.y = gamma
    cube.rotation.z = alpha
  })
})
