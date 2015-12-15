require 'sinatra'
require 'json'

snapshot = {
	html: '',
	css: ''
}

get '/snapshot' do
	content_type :json
	x = {
		html: snapshot[:html],
		css: snapshot[:css]
	}
	x.to_json
end

post '/snapshot' do
	if params[:html] then
		snapshot[:html] = params[:html]
	end
	if params[:css] then
		snapshot[:css] = params[:css]
	end

	puts "Snapshot written"
	puts snapshot

	status 200
  	body ''
end

get '/*' do
	send_file params[:splat][0]
end