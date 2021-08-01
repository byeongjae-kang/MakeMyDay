import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState();

  useEffect(() => {
    axios.get('/api/tasks')
    .then(result => {
      setState(prev => {
        result
      })
    })
  })
}