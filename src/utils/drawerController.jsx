import { Drawer } from "flowbite";

export default function drawerController(id, setShowDrawer){
    
    if(document.getElementById(id)){
        const $targetEl = document.getElementById(id);

        const options = {
            placement: 'right',
            backdrop: true,
            bodyScrolling: false,
            edge: false,
            edgeOffset: '',
            backdropClasses:
                'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
            onHide: () => {
                console.log('drawer is hidden');
            },
            onShow: () => {
                console.log('drawer is shown');
            },
            onToggle: () => {
                console.log('drawer has been toggled');
            },
        };     
    
        const instanceOptions = {
            id: id,
            override: true
          };
    
          setShowDrawer(new Drawer($targetEl, options, instanceOptions));
    }

}