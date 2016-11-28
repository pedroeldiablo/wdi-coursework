get "/" do
  @header ="Latination"
  erb :home
end

post "/translation" do
  @header="Translation"
  @translation = PigLatin.translate(params[:words])
  erb :translation
end

# get "/" do
#   @header ="Latination"
#   erb :home
# end
#
# post "/translation" do
#   @header = "Translation Page"
#   @translation = params[:words]
#   erb :translation
# end

# post "/translation" do
#   PigLatin.translate
#   erb :translation
# end
