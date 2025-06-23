# frozen_string_literal: true

# name: discourse-clavikl
# about: Three-page plugin skeleton
# version: 0.1

register_asset "stylesheets/clavikl-find-college.scss"
register_asset "stylesheets/clavikl-two.scss"
register_asset "stylesheets/clavikl-three.scss"

after_initialize do
  Discourse::Application.routes.append do
    get "/clavikl" => "static#show", id: "clavikl"
    get "/clavikl-two" => "static#show", id: "clavikl_two"
    get "/clavikl-three" => "static#show", id: "clavikl_three"
  end
end
