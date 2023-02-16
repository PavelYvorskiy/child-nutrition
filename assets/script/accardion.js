class Accordion {
    constructor(items, activeClass, activeItem) {
      this.items       = items
      this.activeClass = activeClass
      this.activeItem  = activeItem
      if (typeof this.activeItem === 'number') {
        this.items[this.activeItem].classList.add(this.activeClass)
      }
    }
  
    changeActiveItem(newItemIndex) {
      if (newItemIndex === this.activeItem) {
        return
      }
      if (typeof this.activeItem === 'number') {
        this.items[this.activeItem].classList.remove(this.activeClass)
      }
      this.activeItem = newItemIndex
      this.items[this.activeItem].classList.add(this.activeClass)
    }
  }
  const handleItem = (itemIndex) =>{
    return()=>{
       btnActiveAccordion.changeActiveItem(itemIndex)
       visibleListAccordion.changeActiveItem(itemIndex)
    }
  }
  const btnActive   = document.querySelectorAll('.desktop-list-item')
  const visibleList     = document.querySelectorAll('.desktop-content-block-item')

  const btnActiveAccordion = new Accordion(btnActive , 'active',0)
  const visibleListAccordion   = new Accordion(visibleList ,'active',0)

  btnActive.forEach((item,index) =>{
    item.addEventListener('click',handleItem(index))
  })
