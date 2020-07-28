json.extract! @user, :id, :first_name, :last_name, :email, :birthday, :gender, :bio
json.partial! 'api/users/neko', user: @user