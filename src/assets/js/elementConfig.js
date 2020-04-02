import {
    Rate,
    Row,
    Button,
    Dropdown,
    Avatar,
    Menu,
    Submenu,
    Container,
    Aside,
    Header,
    Main,
    RadioGroup,
    RadioButton,

    MenuItem,
    MenuItemGroup,
    
    DropdownItem,
    
    DropdownMenu,
    Table,
    TableColumn
    

    
  } from 'element-ui'
  
  export default {
    install (V) {
      V.use(Rate)
      V.use(Button)
      V.use(Row)
      V.use(Dropdown)
      V.use(Avatar)
      V.use(Menu)
      V.use(Submenu)
      V.use(Container)
      V.use(Aside)
      V.use(RadioGroup)
      V.use(RadioButton)

      V.use(Header)
      V.use(Main)
 
      V.use(MenuItem)
      V.use(MenuItemGroup)
      V.use(DropdownItem)
      V.use(DropdownMenu)
      V.use(Table)
      V.use(TableColumn)
    }
  }