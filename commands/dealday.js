
const axios = require('axios')
module.exports = {
    name : 'deal-day',
    aliases: [],
    description: "See amazon deals",
    permissions: [],
    async execute(client, message, args, cmd, Discord, MessageEmbed) {
        if(!args[0]) {
            message.reply('Please input the page you want to look for in!')
        }
        const pages = args[0]
        const params = {
            api_key: "8EEDDB7B808C4A02968ACF5B935B60DA",
            type: "deals",
            amazon_domain: "amazon.com",
            deal_types: "deal_of_the_day",
            deal_states: "available",
            prime_eligable: "false",
            page: pages,
            output: "json"
          }
  
            message.reply('Getting the info...')
            function runcode() {
                axios.get('https://api.rainforestapi.com/request', { params })
                .then(response => {
            
            // print the JSON response from Rainforest API
            
                if(pages > response.data.total_pages) return message.reply('The page you have entered doesnt exist')


                const theEmbed = new MessageEmbed()
                .setColor('BLUE')
                .setURL(response.data.deals_results[0].link)
                .setTitle('Deals of the Day')
                .setThumbnail(response.data.deals_results[0].image)
                .addFields(
                    { name: 'Name: ', value: `${response.data.deals_results[0].title}`},
                    { name: 'Price: ', value: `${response.data.deals_results[0].deal_price.value}$`},
                    { name: 'Seller: ', value: `${response.data.deals_results[0].merchant_name}`},
                )
                message.channel.send({ embeds:[theEmbed]});



                const theEmbed1 = new MessageEmbed()
                .setColor('BLUE')
                .setURL(response.data.deals_results[0].link)
                .setTitle('Deals of the Day')
                .setThumbnail(response.data.deals_results[1].image)
                .addFields(
                    { name: 'Name: ', value: `${response.data.deals_results[1].title}`},
                    { name: 'Price: ', value: `${response.data.deals_results[1].deal_price.value}$`},
                    { name: 'Seller: ', value: `${response.data.deals_results[1].merchant_name}`},
                )
                message.channel.send({ embeds:[theEmbed1]});




                const theEmbed2 = new MessageEmbed()
                .setColor('BLUE')
                .setURL(response.data.deals_results[0].link)
                .setTitle('Deals of the Day')
                .setThumbnail(response.data.deals_results[2].image)
                .addFields(
                    { name: 'Name: ', value: `${response.data.deals_results[2].title}`},
                    { name: 'Price: ', value: `${response.data.deals_results[2].deal_price.value}$`},
                    { name: 'Seller: ', value: `${response.data.deals_results[2].merchant_name}`},
                )
                message.channel.send({ embeds:[theEmbed2]});





                const theEmbed3 = new MessageEmbed()
                .setColor('BLUE')
                .setURL(response.data.deals_results[0].link)
                .setTitle('Deals of the Day')
                .setThumbnail(response.data.deals_results[3].image)
                .addFields(
                    { name: 'Name: ', value: `${response.data.deals_results[3].title}`},
                    { name: 'Price: ', value: `${response.data.deals_results[3].deal_price.value}$`},
                    { name: 'Seller: ', value: `${response.data.deals_results[3].merchant_name}`},
                )
                message.channel.send({ embeds:[theEmbed3]});
            }).catch(error => {
                // catch and print the error
                console.log(error);
            })
        }
        runcode();

        setInterval(function(){
            runcode()
        }, 86400000)

}       
}
