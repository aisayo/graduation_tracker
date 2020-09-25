class CreateGrads < ActiveRecord::Migration[6.0]
  def change
    create_table :grads do |t|
      t.string :name
      t.string :degree
      t.string :grad_date
      t.string :school

      t.timestamps
    end
  end
end
