import axios from 'axios'

const apiQuery = axios.create({
    baseURL: 'https://api.adviceslip.com/advice',
    timeout: 1000,

  })


/**
 * Perform a get request to the Advice Slip API.
 * @param {String} sentenceId 
 * @param {axios instance} axiosInstance 
 * @returns an object representing a random advice and its associated id if no sentenceId is specified,
 *  otherwise it returns the an object representing the advice and the id for the specified sentenceId.
 */
const getSentence = async (sentenceId='', axiosInstance=apiQuery) => {
  try {
   const response = await axiosInstance.get(sentenceId, { params: {
    t: new Date().getTime()
  }});
   const  {advice, id} = response.data.slip;
   return {advice, id};
    
  } catch(error) {
    return   {advice: "There is an error connecting to the server", id: 0};
  }
}

export default getSentence
