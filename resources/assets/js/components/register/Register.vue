<template>
    <div>
        <div class="navbar navbar-default topnav">
            <div class="container">
                <div class="panel-heading">注册页面</div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <form action="" class="form-horizontal" v-on:submit.prevent="register()">
                                <div class="form-group">
                                    <label for="phone" class="col-md-2 control-label">手机号</label>
                                    <div class="col-md-4">
                                        <input v-validate="'required|phone'" name='phone' type="text" class="form-control" id="phone" v-model="phone">
                                        <span v-show="errors.has('phone')">{{ errors.first('phone')}}</span>
                                    </div>
                                    <div class="col-md-2">
                                        <button v-bind:class="{disabled: smsSending}" v-on:click.prevent="sendSms()" class="btn btn-default">{{smsText}}</button>
                                        <!-- <button class="btn btn-default">发送验证码</button> -->
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="validatecode" class="col-md-2 control-label">验证码</label>
                                    <div class="col-md-4">
                                        <input v-validate="'required|numeric|min:4'" name='code' type="text" class="form-control" id="validatecode" v-model="code">
                                        <span v-show="errors.has('code')">{{ errors.first('code') }}</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary col-md-8 col-md-offset-2">注册</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
        data() {
            return {
                phone : "",
                smsSending: false,
                time: 0,
                code: "",
            }
        },
        computed: {
            smsText() {
                if (this.time == 0) {
                    this.smsSending = false;
                }
                return this.time > 0 ? "在" + this.time + "s 内未收到重新发送": "发送验证码";
            }
        },
        methods: {
            sendSms() {
                this.smsSending = true
                axios.post('/api/register/sms', { phone: this.phone}).then((response) => {
                    console.log(response);
                    this.time = 60;
                    this.smsSending = true;
                    this.timer();
                }).catch( function(error) {
                    alert("发送短信失败");
                    console.log(error);
                })
            },
            timer() {
                if(this.time > 0) {
                    this.time--;
                    setTimeout(this.timer, 1000);
                }
            },
            register() {
                axios.post('/api/register/register', { phone: this.phone, code: this.code}).then((response) => {
                    alert("注册成功");
                }).catch( function(error) {
                    alert("注册失败");
                    console.log(error);
                })
            }
        }
    }
</script>