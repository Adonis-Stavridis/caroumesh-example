# Caroumesh-Example

This is a basic example / demo for the
[Caroumesh](https://www.npmjs.com/package/caroumesh) npm package.

Live example: <https://adonis-stavridis.github.io/caroumesh-example>.

Live demo: <https://codesandbox.io/s/caroumesh-example-8ui0h>.

## Code

```html
<div className="Container">
  <h1>Caroumesh - Example</h1>

  <Caroumesh
    shadows
    controls
    theme={"dodgerblue"}
    width={"75vw"}
    height={"75vh"}
    border={"2px solid gold"}
    borderRadius={"2em"}
  >
    <Model src="assets/Star destroyer.glb" scale={0.1} shadows />
    <Model src="assets/TIE fighter.glb" scale={5} shadows />
  </Caroumesh>

  // info
</div>
```

---

Thank you for using Caroumesh ! ❤️
