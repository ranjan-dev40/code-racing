import React from 'react'

const typedCorrectlyStyle = {
    "backgroundColor" : "#34eb77"
}

const currentStyle = {
    "textDecoration" : "underline"
}

const DisplayWords = (props) => {
    const {wordArray, player} = props

    const getTypedWords = (wordArray, player) => {
        let typedWords = wordArray.slice(0, player.currWordInd)
        typedWords = typedWords.join(" ")

        return <span style={typedCorrectlyStyle}>{typedWords+" "}</span>
    }

    const getCurrentWord = (wordArray, player) => {
        if (player.currWordInd < wordArray.length) {
            return <span style={currentStyle}>{wordArray[player.currWordInd]+" "}</span>
        }

        return null
    }

    const getWordsToBeTyped = (wordArray, player) => {
        let wordsToBeTyped = wordArray.slice(player.currWordInd + 1, wordArray.length)
        wordsToBeTyped = wordsToBeTyped.join(" ")
        console.log(wordsToBeTyped)

        return <span>{wordsToBeTyped}</span>
    }

    return (
    <>
        {getTypedWords(wordArray, player)}
        {getCurrentWord(wordArray, player)}
        {getWordsToBeTyped(wordArray, player)}
    </>
  )
}

export default DisplayWords