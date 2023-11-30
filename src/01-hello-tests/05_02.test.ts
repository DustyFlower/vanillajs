import {CityType} from './02_02';
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from './05_02';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'NewYork',
        houses: [
            {
                builtIn: 2012, repaired: false,
                address: {
                    number: 100, street:
                        {
                            title: 'White street'
                        }
                }
            },
            {
                builtIn: 2008, repaired: false,
                address: {
                    number: 100, street:
                        {
                            title: 'Happy street'
                        }
                }
            },
            {
                builtIn: 2020, repaired: false,
                address: {
                    number: 101, street:
                        {
                            title: 'Happy street'
                        }
                }
            }],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('list of street titles of government buildings',()=>{
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central Str');
    expect(streetsNames[1]).toBe('South Str')
})

test('list of street titles',()=>{
    let streetsTitles = getStreetsTitlesOfHouses(city.houses);

    expect(streetsTitles.length).toBe(3);
    expect(streetsTitles[0]).toBe('White street');
    expect(streetsTitles[1]).toBe('Happy street');
    expect(streetsTitles[2]).toBe('Happy street');
})

test('create greeting messages for streets',()=>{
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from White street');
    expect(messages[1]).toBe('Hello guys from Happy street');
    expect(messages[2]).toBe('Hello guys from Happy street');
})