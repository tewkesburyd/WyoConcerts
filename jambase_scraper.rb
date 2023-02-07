require 'watir'
require 'webdrivers'
require 'nokogiri'
require 'csv'

browser = Watir::Browser.new
browser.goto 'https://www.jambase.com/concerts/us/wyoming/'
parsed_page = Nokogiri::HTML(browser.html)

File.open("parsed.text", "w") { |f| f.write "#{parsed_page}" }

browser.close

CSV.open("concerts.csv", "a+") do |csv|
    csv << ["image"]

    concert_cards = parsed_page.xpath("//li[contains(@class, 'jbshow event-show  jbevent clearfix')]")

    concert_cards.each do |card|
        image = card.xpath("div[@class ='col-image']/div[@class = 'thumbail-wrap']/a/@href")

        csv << [image.value]
    end
end