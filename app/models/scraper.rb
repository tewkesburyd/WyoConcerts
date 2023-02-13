require 'watir'
require 'webdrivers'
require 'nokogiri'
require 'requests'

class Scraper

    # def self.scrape
    #     browser = Watir::Browser.new
    #     browser.goto 'https://www.jambase.com/concerts/us/wyoming/'
    #     parsed_page = Nokogiri::HTML(browser.html)

    #     concert_cards = parsed_page.css("li.event-show")

    #     concert_cards.each do |card|
    #         v_name = card.css('a.post-title-wrap').css('p').text
    #         city = card.css('a.post-title-wrap').css('li').text.split[0]
    #         state = card.css('a.post-title-wrap').css('li').text.split[-1]

    #         v_website = card.css("div.ticketing-links li a").first&.text == "Venue Website" ? card.css('a.ticketing-link').first.attributes['href'].value : ""
            
    #         venue = Venue.find_or_create_by(name: v_name, city: city, state: state)
    #         venue.website ||= v_website
    #         venue.save


    #         image = card.css('img').first.attribute('src').value
    #         name = card.css('img').first.attributes['alt'].value
    #         bands = card.css('img').first.attributes['alt'].value
    #         date = card.attributes['data-date'].value
    #         website = card.css('a').first.attributes['href'].value
           
            
    #         created = Concert.create(name: name, bands: bands, date: date, website: website, image: image, venue: venue)
    #         puts created
    #     end

    #     browser.close
    # end

    def self.mangyMoose
        browser = Watir::Browser.new
        res = requests.get('https://www.prekindle.com/events/ox-presents')
        parsed_page = Nokogiri::HTML(res.html)

        concert_cards = parsed_page.css('div.pk-eachevent')

        # const months = [
        #     'January', 'February', 'March', 'April', 'May',
        #     'June', 'July', 'August', 'September',
        #     'October', 'November', 'December'
        #     ];
        # function monthNameToNum(monthname) {
        #     const month = months.indexOf(monthname);
        #     return month ? month + 1 : 0;
        #     }

        concert_cards.each do |card|
            v_name = card.css('span.pk-venue-name').text
            img = card.css('img').first.attribute('src').value
            name = card.css('div.pk-headline').text
            bands = card.css('div.pk-headline').text
            date = card.css('span.pk-date').text
            website = card.css('a.pk-title-link').first.attributes['href'].value
            venue = Venue.find_or_create_by(name: " #{v_name}")
            
            created = Concert.create(name: name, bands: bands, date: date, website: website, image: image, venue: venue)
        end 
        browser.close
    end

end



