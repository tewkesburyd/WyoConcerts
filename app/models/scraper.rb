require 'watir'
require 'webdrivers'
require 'nokogiri'

class Scraper

    def self.scrape
        browser = Watir::Browser.new
        browser.goto 'https://www.jambase.com/concerts/us/wyoming/'
        parsed_page = Nokogiri::HTML(browser.html)

        concert_cards = parsed_page.css("li.event-show")

        concert_cards.each do |card|
            v_name = card.css('a.post-title-wrap').css('p').text
            venue_name = v_name.slice(1, v_name.length)
            city = card.css('a.post-title-wrap').css('li').text.split[0]
            state = card.css('a.post-title-wrap').css('li').text.split[-1]

            v_website = card.css("div.ticketing-links li a").first&.text == "Venue Website" ? card.css('a.ticketing-link').first.attributes['href'].value : ""
            
            venue = Venue.find_or_create_by(name: venue_name, city: city, state: state)
            venue.website ||= v_website
            venue.save


            image = card.css('a img').first.attributes['data-src'].value
            name = card.css('img').first.attributes['alt'].value
            bands = card.css('img').first.attributes['alt'].value
            date = card.attributes['data-date'].value
            year = date.slice(0,4)
            monthDay = date.slice(4, date.length)
            dateFormatted= monthDay+year
            website = card.css('a').first.attributes['href'].value
           
            created = Concert.find_or_create_by(name: name, bands: bands, date: dateFormatted, website: website, image: image, venue: venue)
        end

        browser.close
    end

    def self.mangyMoose
        browser = Watir::Browser.new
        browser.goto 'https://www.prekindle.com/events/ox-presents'
        parsed_page = Nokogiri::HTML(browser.html)

        concert_cards = parsed_page.css('div.pk-eachevent')

        months = [
            'January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September',
            'October', 'November', 'December'
            ];


        concert_cards.each do |card|
            v_name = card.css('span.pk-venue-name').text
            image = card.css('img').first.attribute('src').value
            name = card.css('div.pk-headline').text
            bands = card.css('div.pk-headline').text

            date = card.css('span.pk-date').text
            month = if months.index(date.split(" ")[0]) + 1 < 10
                        '0' + (months.index(date.split(" ")[0]) + 1).to_s
                    else
                        (months.index(date.split(" ")[0]) + 1).to_s
                    end

            day = if date.split(" ")[1].to_i < 10
                '0'+date.split(" ")[1]
            else
                date.split(" ")[1]
            end
            dateFormatted = month+day+'2023'

            website = card.css('a.pk-title-link').first.attributes['href'].value
            venue = Venue.find_by(name: "Mangy Moose")
            created = Concert.find_or_create_by(name: name, bands: bands, date: dateFormatted, website: website, image: image, venue: venue)
        end 
        browser.close
    end

end



