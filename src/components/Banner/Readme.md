Banner types
```js
<React.Fragment>
  <Banner visible={true} type="info">Hello</Banner>
  <Banner visible={true} type="warning">Hello</Banner>
  <Banner visible={true} type="error">Hello</Banner>
  <Banner visible={true} type="success">Hello</Banner>
  <Banner visible={true}>Hello</Banner>
</React.Fragment>
```

Banner using `content` prop
```js
<Banner type="info" visible={true} content="Hello" />
```

Flat Banner
```js
<Banner type="info" visible={true} flat content="Hello" />
```

Render HTML inside Banner
```js
<Banner type="info" visible={true} html="<b>Hello</b>" />
```

Non-dismissable Banner
```js
<Banner visible={true} type="success" dismissable={false}>Hello</Banner>
```
