var mongoose=require('mongoose');
mongoose.model('companies',new mongoose.Schema(
    {
    name:String,
    number_of_employees:Number,
    found_year:Number,
    overview:String,
    total_money_raised:String,
    offices:{city:String,address1:String,address:String,zip_code:String}
}),
'companies');