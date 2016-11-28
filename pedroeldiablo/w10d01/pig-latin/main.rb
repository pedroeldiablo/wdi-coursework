require "sinatra"
require "sinatra/reloader"
require_relative "models/pig_latin.rb"

Dir[File.dirname(__FILE__) + "/controllers/*.rb"].each { |file| require file}


# get "/" do
#   @header ="Home"
#   erb :home
# end

# post "/translation" do
#   @header = "Translation Page"
#   @translation = params[:words]
#   erb :translation
# end
