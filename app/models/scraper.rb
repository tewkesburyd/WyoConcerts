require 'watir'
require 'webdrivers'
require 'nokogiri'
require 'csv'

class Scraper

    def self.scrape
        browser = Watir::Browser.new
        browser.goto 'https://www.jambase.com/concerts/us/wyoming/'
        parsed_page = Nokogiri::HTML(browser.html)

        concert_cards = parsed_page.css("li.event-show")

        # concert_cards.each do |venue|
        #     # debugger
        #     name = venue.css('a.post-title-wrap').css('p').text
        #     city = venue.css('a.post-title-wrap').css('li').text.split[0]
        #     state = venue.css('a.post-title-wrap').css('li').text.split[-1]
        #     if (venue.css('div.ticketing-links'))
        #         if (venue.css('div.ticketing-links li a').first&.text == "Venue Website")
        #             website = venue.css('a.ticketing-link').first.attributes['href'].value
        #         end
        #     else 
        #         website = ''
        #     end
        #     Venue.create(name: name, city: city, state: state, website: website)
        # end

        concert_cards.each do |card|
            v_name = card.css('a.post-title-wrap').css('p').text
            city = card.css('a.post-title-wrap').css('li').text.split[0]
            state = card.css('a.post-title-wrap').css('li').text.split[-1]

            v_website = card.css("div.ticketing-links li a").first&.text == "Venue Website" ? card.css('a.ticketing-link').first.attributes['href'].value : ""
            
            venue = Venue.find_or_create_by(name: v_name, city: city, state: state)
            venue.website ||= v_website
            venue.save


            image = card.css('img').first.attribute('src').value
            name = card.css('img').first.attributes['alt'].value
            bands = card.css('img').first.attributes['alt'].value
            date = card.attributes['data-date'].value
            website = card.css('a').first.attributes['href'].value
           
            
            created = Concert.create(name: name, bands: bands, date: date, website: website, image: image, venue: venue)
            puts created
        end

        browser.close
    end

end



