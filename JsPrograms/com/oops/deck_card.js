
/**
 * 
 * @author   : kapil asthana
 * Date      : 03/10/2019
 * program   : Deck of cards.
 * 
 **/
const util = require("../data structure/data_structureUtil")
const input = require("../algorithms/utility")

const suits = ["Clubs","Diamonds","Hearts","Spades"]
const value = [2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"]


 class Cards{

        constructor(suit,value){
        
            this.suit = suit
            this.rank = value
        }
    }


    class Deck{
        constructor(){
            this.deck = []
        }

        createDeck()
        {
            for(let suit of suits)
            {
                for(let val of value)
                {
                    this.deck.push(new Cards(suit,val))
                }
            } 
        }

        shuffle()
        {
            let count = this.deck.length

            while(count)
            {
                let i = Math.floor(Math.random() * count--)
               let temp = this.deck[count]
               this.deck[count] = this.deck[i]
         
            }
           
        }

        make_Deal(i,len)
        {
            let player1 = []
            let player2 = []
            let player3 = []
            let player4 = []

            this.shuffle()
            for(let i = 0; i<9;i++)
            {
                player1.push(this.deck.pop())
                player2.push(this.deck.pop())
                player3.push(this.deck.pop())
                player4.push(this.deck.pop())
            }

            let  all_player ={
                "player1":player1,
                "player2":player2,
                "player3":player3,
                "player4":player4
            }
            return all_player

        }

        

     
}
let deck = new Deck()
deck.createDeck()
let allPayers = deck.make_Deal()

console.log("for player1:\n",allPayers.player1)
console.log("for player2:\n",allPayers.player2)
console.log("for player3:\n",allPayers.player3)
console.log("for player4:\n",allPayers.player4)
console.log("=======================================================")
console.log(".....................After sorting.....................")

let arr = sort(allPayers.player1)
let arr1 = sort(allPayers.player2)
let arr2 = sort(allPayers.player3)
let arr3 = sort(allPayers.player3)


function sort(playerArr)
{
   for(let i= 0;i<playerArr.length;i++)
   {
       for(let j = i+1;j<playerArr.length;j++)
       {
           if(playerArr[j].rank<playerArr[i].rank)
           {
               let temp = playerArr[i]
               playerArr[i] = playerArr[j]
               playerArr[j] = temp
           }
       }
   }
 return playerArr
}

let list1 = util.data.DeckQueue()
let list2 = util.data.DeckQueue()
let list3 = util.data.DeckQueue()
let list4 = util.data.DeckQueue()

console.log("------------link list player 1---------------")
    for(let i=0;i<arr.length;i++)
    {
        list1.insertEle(arr[i])
    }
   list1.plrintEle()

console.log("==================link list player 2=======================")
     for(let i=0;i<arr1.length;i++)
    {
        list2.insertEle(arr1[i])
    }
    list2.plrintEle()
    console.log("==================link list player 3=======================")
for(let i=0;i<arr2.length;i++)
{
    list3.insertEle(arr2[i])
}
list3.plrintEle()
console.log("==================link list player 4=======================")
for(let i=0;i<arr3.length;i++)
{
    list4.insertEle(arr3[i])
}
    list4.plrintEle()

    exports