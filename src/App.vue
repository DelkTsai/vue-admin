<template>
    <div class="app">
        <navbar :curr-user="currUser" :all-menus="allMenus" @switch-menu="switchMenu"></navbar>

        <section class="layout">
            <sidebar :curr-menu="currMenu" :sub-menu="subMenu"></sidebar>

            <!-- main content -->
            <section class="main-content">

                <!-- content wrapper -->
                <div class="content-wrap">
                    <!-- inner content wrapper -->
                    <div class="wrapper no-p">
                        <router-view></router-view>
                    </div>
                    <!-- /inner content wrapper -->

                </div>
                <!-- /content wrapper -->
                <a class="exit-offscreen"></a>
            </section>
            <!-- /main content -->

        </section>
    </div>
</template>

<script>
    import Navbar from './components/common/Navbar'
    import Sidebar from './components/common/Sidebar'

    export default {
        components: {
            Navbar,
            Sidebar
        },
        data: function() {
            return {
                allMenus: [],
                currMenu: {},
                subMenu: {},
                currUser: {
                    username: 'superadmin',
                    avatar: 'static/images/avatar.jpg'
                }
            }
        },
        methods:{
            initMenus:function(){
                this.allMenus = [{
                    text: '系统管理',
                    name: 'sys',
                    url: '/sys',
                    icon: 'fa-cog',
                    submenus: [{
                        text: '用户管理',
                        name: 'user',
                        icon: 'fa-user',
                        url: '/sys/user'
                    }, {
                        text: '角色管理',
                        name: 'role',
                        icon: 'fa-users',
                        url: '/sys/role'
                    }]
                }];
            },
            switchMenu:function(menu){
                this.currMenu = menu;
                this.$router.go(menu.submenus[0].url);
            }
        },
        ready: function() {
            this.initMenus();
            //初始化sublime前端框架
            window.sublimeApp = SublimeApp();
            window.sublimeApp.init();
        }
    }
</script>

<style>

</style>
