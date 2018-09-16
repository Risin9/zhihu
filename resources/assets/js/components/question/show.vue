<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">详情</div>

                    <div class="bs-callout bs-callout-primary">
                        <h4>{{ question.title }}</h4>
                        <p>
                            {{ question.content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('/api/question/' + this.$route.params.id).then((response) => {
                this.question = response.data
            })
        },
        data() {
            return {
                question : {
                    'title' : "",
                    'content': ""
                }
            }
        }
    }
</script>