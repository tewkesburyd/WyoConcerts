class AddImageToConcerts < ActiveRecord::Migration[7.0]
  def change
    add_column :concerts, :image, :string
  end
end
