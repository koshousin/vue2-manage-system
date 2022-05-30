<template>
    <div class="route-wrapper">
      <div class="route-head">
        <Breadcrumb separator-class="el-icon-arrow-right">
          <BreadcrumbItem :to="{path:'/form'}">首页</BreadcrumbItem>
          <BreadcrumbItem>我的</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="route-content">
        <MyForm :model="form" label-width="80px">
          <FormItem label="活动名称">
            <MyInput style="width:" size="small" v-model="form.name" />
          </FormItem>
          <FormItem label="选择器">
            <Select size="small" v-model="form.selector" style="width:150px">
              <Option label="Oppo" value="hh"></Option>
              <Option label="Apple"  value="hh"></Option>
              <Option label="Google"  value="hh"></Option>
            </Select>
          </FormItem>
          <FormItem label="日期时间">
            <Col :span="5">
              <DatePicker 
                type="date" 
                placeholder="选择日期"
                v-model="form.date"
                style="width:100%;"
                size="small"
              ></DatePicker>
            </Col>
            <Col class="line" :span="1">-</Col>
            <Col :span="5">
              <TimePicker
                placeholder="选择时间"
                v-model="form.time"
                style="width:100%"
                size="small"
              ></TimePicker>
            </Col>
          </FormItem>
          <FormItem label="城市级联">
            <Cascader
              v-model="form.city"
              :options="cities"
            ></Cascader>
          </FormItem>
          <FormItem label="选择开关">
            <MySwitch 
              v-model="form.isOpen"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></MySwitch>
          </FormItem>
          <FormItem label="多选框">
            <CheckboxGroup v-model="form.checkList">
              <Checkbox label="复选框 A"></Checkbox>
              <Checkbox label="复选框 B"></Checkbox>
              <Checkbox label="复选框 C"></Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem label="单选框">
            <Radio v-model="form.selected" label="1">哈哈</Radio>
            <Radio v-model="form.selected" label="2">呵呵</Radio>
          </FormItem>
          <FormItem label="文本框">
            <MyInput 
              typed="textarea" 
              style="width:40rem" 
              size="small" 
              maxlength="100"
              :autosize="{ minRows: 2, maxRows: 4}"
              v-model="form.content"></MyInput>
          </FormItem>
          <FormItem>
            <Button size="small" type="primary" @click="onSubmit">表单提交</Button>
            <Button size="small">取消</Button>
          </FormItem>
        </MyForm>
      </div>
    </div>
</template>
<script>
  import {Breadcrumb,
          BreadcrumbItem,
          Form,FormItem,Input,
          Select,Option,Col,
          DatePicker,TimePicker,
          Cascader,Switch,
          CheckboxGroup,Checkbox,
          Radio,Button} from 'element-ui'
  export default {
    name:'Form',
    components:{
      Breadcrumb,
      BreadcrumbItem,
      MyForm:Form,
      FormItem,
      MyInput:Input,
      Select,
      Option,
      Col,DatePicker,
      TimePicker,
      Cascader,MySwitch:Switch,
      CheckboxGroup,Checkbox,Radio,Button},
    data(){
      return {
        form :{
          name:'',
          selector:'',
          date:'',
          time:'',
          city:'',
          isOpen:true,
          checkList:[],
          selected:'',
          content:''
        },
        cities:[
          {
            value:'Canada',
            label:'加拿大',
            children:[
              {
                value:'Toronto',
                label:'多伦多'
              }
            ]
          },
          {
            value:'America',
            label:'美国',
            children:[
              {
                value:'California',
                label:'加利福尼亚',
                children:[
                  {
                    value:'GoldGateBridge',
                    label:'金门大桥'
                  }
                ]
              }
            ]
          },
        ]
      }
    }
  }
</script>
<style scoped>
</style>
