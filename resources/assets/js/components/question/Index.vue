<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Home Componen</div>

                    <div v-for = "question in questions" class = "bs-callout bs-callout-primary">
                        <h4><router-link :to="{name:'question_show', params:{id: question.id }}">{{ question.title }}</router-link></h4>
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
            axios.get('/api/question/index').then((response) => {
                this.questions = response.data
                console.log(this.questions);
            })
        },
        data() {
            return {
                questions : []
            }
        }
    }
</script>