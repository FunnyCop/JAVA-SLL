// Node
class Node {
    constructor( value ) {
        this.value = value // value of node
        this.next = null // next node in list
    }
}

// List
class List {
    constructor() {
        this.head = null // first value in list
    }

    // add node to beginning of list
    addToFront( value ) {
        const node = new Node( value )

        node.next = this.head
        this.head = node

        return this
    }

    // add node to end of list
    addToBack( value ) {
        const node = new Node(value)

        if ( ! this.head ) {
            this.head = node

            return this
        }


        let runner = this.head

        while ( runner.next )
            runner = runner.next

        runner.next = node

        return this
    }

    // add node before specified index
    prependValue( value, location ) {
        const node = new Node( value )

        if ( ! this.head ) {
            this.head = node

            return this
        }

        if ( location === 0 ) {
            node.next = this.head
            this.head = node

            return this
        }

        let count = 0
        let runner = this.head

        while ( count + 1 < location && runner.next ) {
            runner = runner.next
            count ++
        }

        node.next = runner.next
        runner.next = node

        return this
    }

    // add node after specified index
    appendValue( value, location ) {
        const node = new Node( value )

        if ( ! this.head ) {
            this.head = node

            return this
        }

        if ( location === 0 ) {
            node.next = this.head.next
            this.head.next = node

            return this
        }

        let count = 0
        let runner = this.head

        while ( count < location && runner.next ) {
            runner = runner.next
            count ++
        }

        node.next = runner.next
        runner.next = node

        return this
    }

    // print all values in list
    printValues() {
        console.log( "====================" )

        if ( ! this.head )
            console.log( "There's nothing in this list!" )

        let runner = this.head

        while ( runner ) {
            console.log( runner.value )
            runner = runner.next
        }

        console.log( "====================" )

        return this
    }

    // determine whether or not a value can be found in the list
    contains( value ) {
        console.log( "====================" )

        if ( ! this.head )
            console.log( "There's nothing in this list!" )

        let runner = this.head

        while ( runner ) {
            if ( runner.value === value ) {
                console.log( `Found ${ value } in list!` )
                return this
            }

            runner = runner.next
        }

        console.log( `Could not find ${ value } in list!` )

        console.log( "====================" )

        return this
    }

    // remove first node in list
    removeFromFront() {
        if ( ! this.head ) {
            console.log( "There's nothing in this list!" )

            return this
        }

        this.head = this.head.next

        return this
    }

    // remove last node in list
    removeFromBack() {
        if ( ! this.head ) {
            console.log(  "There's nothing in this list!" )

            return this
        }

        if ( ! this.head.next ) {
            this.head = null

            return this
        }

        let runner = this.head

        while ( runner.next.next )
            runner = runner.next

        runner.next = null

        return this
    }

    // reverse list
    reverseList() {
        if ( ! this.head ) {
            console.log(  "There's nothing in this list!" )

            return this
        }

        if ( ! this.head.next ) {
            console.log(  "There's only one node in this list!" )

            return this
        }

        let runner = this.head
        let previous = null
        let next = runner.next

        while ( next ) {
            next = runner.next
            runner.next = previous
            previous = runner
            runner = next
        }

        this.head = previous

        return this
    }

}

const list = new List()
list.addToFront(1)
.addToBack(2)
.prependValue( 5, 1 )
.appendValue( 17, 3 )
.printValues()
.contains( 5 )
.removeFromFront()
.printValues()
.contains( 1 )
.removeFromBack()
.printValues()
.reverseList()
.printValues()