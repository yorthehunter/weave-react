The `<Icon>` component uses `iconPaths.js` to store SVG paths for icons. This system is limited in its usefulness, but makes rapid icon development pretty easy. You add a key-value pair to `iconPaths` with a name and a set of SVG paths (copy-pasted from an SVG's source).

```js
<Icon name="close" />
```

```js
<Icon name="dropdown" />
```

```js
<Icon name="cog" />
```

```js
<Icon name="person" />
```

```js
<Icon name="stitchFixLogo" />
```

Color / height / width modifiers
```js
<Icon name="stitchFixLogo" color="green" height={48} width={48} />
```
