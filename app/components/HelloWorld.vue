<template>
    <Page class="page" actionBarHidden="true">

        <StackLayout orientation="vertical" @tap="fetchQuote">
            <Label id="quote" textWrap="true" :text="quote" />
            <Label id="author" textWrap="true" :text="author" />
        </StackLayout> 
    </Page>
</template>

<script>
    import * as http from "http";
    export default {
        data() {
            return {
                quote: "",
                author: ""
            };
        },
        methods: {
            fetchQuote() {
                http.getJSON(
                    "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
                ).then(
                    res => {
                        this.quote = res[0].quote;
                        this.author = res[0].author;
                    },
                    error => {
                        console.log(error);
                    }
                );
            }
        },
        created() {
            this.fetchQuote();
        }
    };
</script>

<style scoped>
    #quote {
        font-size: 40px;
        text-align: right;
        margin-top: 30%;
        font-weight: bold;
        margin-right: 10px;
        color: white;
    }

    #author {
        text-align: right;
        font-size: 25px;
        margin-top: 10%;
        margin-right: 3px;
        color: white;
    }

    .page {
        background-image: url('~/assets/breaking-bad1.jpg');
        background-position: center;
        background-size: cover;
    }
</style>