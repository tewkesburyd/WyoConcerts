class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.boolean :admin
      t.string :email
      t.string :password_digest
      t.boolean :promotion_interest

      t.timestamps
    end
  end
end
