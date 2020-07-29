# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  gender          :string           not null
#  birthday        :date             not null
#  bio             :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null

class User < ApplicationRecord
  validates :first_name, :last_name, :password_digest, :birthday, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6}, allow_nil: true 

  after_initialize :ensure_session_token

  # Required for :password validation
  attr_reader :password

  # Finds user by email and returns user if password matches
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  # Resets session_token, persists change, and returns session_token
  def reset_session_token!
    self.session_token = self.class.generate_sesssion_token
    self.save!
    self.session_token
  end

  # Compares plaintext password to password_digest
  def is_password?(password)
    bcrypt_password = BCrypt::Password.new(password_digest)
    bcrypt_password.is_password?(password)
  end

  # Sets password_digest to 'BCryptified' version of the plaintext password
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private
  # Generates a random string for session_token
  def self.generate_sesssion_token
    SecureRandom::urlsafe_base64
  end
  
  # Called with after_initialize callback
  def ensure_session_token
    self.session_token ||= self.class.generate_sesssion_token
  end

end
