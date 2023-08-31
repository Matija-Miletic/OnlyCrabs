import express from 'express'
import request from 'superagent'

import 'dotenv/config'

const router = express.Router()

router.get(`/:planet`, async (req, res) => {
  try {
    const planet = req.params.planet
    console.log(planet)
    const response = await request
      .get(`https://api.api-ninjas.com/v1/planets?name=${planet}`)
      .set({ 'X-Api-Key': process.env.X_API_Key })
    res.json(response.body)
  } catch (error: any) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

export default router
