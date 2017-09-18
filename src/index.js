import {filterTool, renderAll, renderTool} from './Rendering'
import {MyWork} from './MyWork'
import {makeSureInitialObjectsArePresent} from './Objects'

new MyWork().reload()
makeSureInitialObjectsArePresent()
renderTool(filterTool)
renderAll()
