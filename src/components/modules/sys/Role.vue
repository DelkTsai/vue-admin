<template>
    <div class="hello">
        <h1>{{ menu.title }}</h1>
    </div>
</template>

<script>
    export default {
        // data () {
        //   return {
        //     // note: changing this line won't causes changes
        //     // with hot-reload because the reloaded component
        //     // preserves its current state and we are modifying
        //     // its initial state.
        //     msg: 'Hello World!'
        //   }
        // }
        data: function() {
            return {
                menu: {
                    pmenu: 'sys',
                    name: 'role',
                    title: '角色管理'
                }
            }
        },
        methods: {
            initMenu: function() {
                var menus = this.$parent.allMenus;
                for(var index in menus){
                    if(menus[index].name == this.menu.pmenu) this.$parent.currMenu = menus[index];
                }
                this.$parent.subMenu = this.menu;
            }
        },
        ready: function() {
            this.initMenu();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>