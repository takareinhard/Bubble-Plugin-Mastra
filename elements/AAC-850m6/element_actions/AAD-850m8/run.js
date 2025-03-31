function(instance, properties, context) {
  return instance.data.agent.say(properties.input).then(response => {
    return { message: response };
  });
}

