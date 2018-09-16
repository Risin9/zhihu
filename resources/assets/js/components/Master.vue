<template>
    <div>
        <div class="navbar navbar-default topnav">
            <div class="container">
                <div class="panel-heading">注册页面</div>
            </div>
        </div>

        <transition name="fade">
            <router-view></router-view>
        </transition>

        <div class="row footer navbar-fixed-bottom">
            <div class="col-md-4 col-md-offset-4" style="text-align: center">
                <a href="#">知乎日报</a> | <a href="#">联系我们</a> | <a href="#">来知乎工作</a>
            </div>
            <div class="col-md-6 col-md-offset-3" style="text-align: center">
                <p>2018 知乎京 ICP 证 110745 号京公网安备 xxxxx 号出版物经营许可证</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {

    }
</script>