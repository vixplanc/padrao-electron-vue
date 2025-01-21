<script setup>
import { ref } from 'vue';

const number1 = ref(null);
const number2 = ref(null);
const result = ref(null);

// const ipcHandle = () => window.electron.ipcRenderer.send('ping')

const runScript = async () => {
  try {
    const params = { a: number1.value, b: number2.value };
    const response = await window.electron.ipcRenderer.invoke('run-python-script', params);
    result.value = response.result;
  } catch (error) {
    console.error('Erro ao rodar o script:', error);
  }
};
</script>

<template>
  <div>
    
  </div>
</template>
