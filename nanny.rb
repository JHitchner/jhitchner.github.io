require "sinatra"
require "sendgrid-ruby"

get "/" do
  erb :home
end
get "/contact" do
  erb :contact
end

post "/response" do
  from = SendGrid::Email.new(email:params[:from])
  subject = params[:subject]
  to = SendGrid::Email.new(email: params[:to])
  content = SendGrid::Content.new(type: 'text/plain', value: params[:content])
  mail = SendGrid::Mail.new(from, subject, to, content)
  sg = SendGrid::API.new(api_key:ENV["SENDGRID_API_KEY"])
  response = sg.client.mail._('send').post(request_body: mail.to_json)
  puts response.status_code
  puts response.body
  redirect "/contact"
end

# get "/how" do
#   erb :how
# end
#
# get "/testimonials" do
#   erb :testimonials
# end
