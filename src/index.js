import * as THREE from 'three'
import * as GyroNorm from 'gyronorm'


console.log('branch works')
const toRadians = angle => angle * (Math.PI / 180)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)
camera.position.z = 5

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

    const angle = new THREE.Euler(beta, gamma, alpha)

    cube.rotation = angle
  })
})
