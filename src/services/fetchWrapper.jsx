import { userService } from "./user.service";

export const fetchWrapper = {
    postSnH
}

function postSnH(url, body){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
    return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response){
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if(!response.ok){
        if([401, 403].includes(response.status) && userService.usuario){
          userService.logout();
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  }