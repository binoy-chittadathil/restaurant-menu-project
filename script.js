const menuList=document.getElementById('menuList')

const menuItems = [
    { name: 'Caprese Salad', type: 'appetizer' },
    { name: 'Margherita Pizza', type: 'main' },
    { name: 'Tiramisu', type: 'dessert' },
    // Add more menu items as needed
];

function renderMenu(items){
    menuList.innerHTML=""
    items.forEach(item => {
        const menuItem=document.createElement('div');
        menuItem.className='menu-item';
        menuItem.innerHTML=item.name
        menuList.appendChild(menuItem)
    });
}

function filterMenu(type){
    if(type==='all'){
        renderMenu(menuItems);
    }else{
        const filteredMenuItems=menuItems.filter(item=>item.type===type);
        renderMenu(filteredMenuItems);
    }
}