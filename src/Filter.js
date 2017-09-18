import {registerUserInterfaceAware, UserInterfaceAware} from './UserInterfaceAware'

export class Filter extends UserInterfaceAware {

    userInterface = ['search']

    filterValue = ''

    constructor() {
        super()
        this.search.auto = true
    }

    search(filter) {
        this.filterValue = filter
    }

}

registerUserInterfaceAware(Filter)