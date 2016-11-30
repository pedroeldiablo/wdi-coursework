json.extract! country, :id, :name, :image, :size, :population, :language, :gdp, :created_at, :updated_at
json.url country_url(country, format: :json)