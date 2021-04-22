## useSoftkey
### Usage

```js
import { useSoftkey } from 'hooks'
useSoftkey(origin, // represent as the unique id for the page where it uses softkey
    { // config
        center, // center key value,
        left, // left key value,
        right, // right key
        onKeyCenter, // center key function when press
        onKeyLeft, // LSK key function when press
        onKeyRight, // RSK key function when press
        onKeyArrowDown, // Phsycial key down function when press
        onKeyArrowUp, // Phsycial key up function when press
        onKeyArrowLeft, // Phsycial key left function when press
        onKeyArrowRight, // Phsycial key right function when press
        onKeyBackspace, // function called when press back/end key
    }, 
    dependencies, // default: []
    replace, // when true, Remove and replace the existing softkey item with the new config; default false
)
```

## usePopup
### Usage

```js
import { usePopup } from 'hooks'
const [showComponentInPopup] = usePopup(Component, 
    { 
        stack: true, // stack false to remove all existing popup; 
        mode: 'auto'|'fullscreen' // shows the popup in fullscreen or auto mode
    }
) 
showComponentInPopup( props )
```