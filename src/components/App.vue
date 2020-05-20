<template>
  <div id="app" class="ui-page flex hbox main-start cross-start">
    <div class="vbox">
      <SideNav style="min-width: 160px;"
        heading
        multilevel
        no-icon
        :items="menuTree"
        :selected-item.sync="sideNavIndex"
        @update:selectedItem="onSideNavClick"
      />
    </div>
    <div class="vbox flex stretch main-center cross-center spectrum-Typography">
      <h1 class="spectrum-Heading spectrum-Heading--XL">Spectrum-UI-Vue Starter</h1>
      <div class="hbox flex stretch main-center cross-center">
        <p style="font-size: 1.2rem;">
          You are welcome to try
          <a href="https://spectrum-ui-vue.now.sh/" target="_blank">examples</a> here.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
const menuTree = [{
  label: 'Digest',
  iconName: 'Star'
}, {
  label: 'Catalog',
  iconName: 'Blur',
  disabled: true
}, {
  label: 'Zoo',
  iconName: 'Channel',
  $children: [{
    label: 'frogs',
    iconName: 'RangeMask'
  }, {
    label: 'ducks',
    iconName: 'Refresh'
  }, {
    label: 'rabbits',
    iconName: 'Select'
  }]
}, {
  label: 'Gallery',
  iconName: 'RangeMask'
}, {
  label: 'Feedback',
  iconName: 'Refresh'
}]
export default {
  name: 'App',
  data() {
    return {
      menuTree,
      sideNavIndex: '0',
    }
  },
  methods: {
    onSideNavClick(index) {
      // console.log('onSideNavClick', index)
    }
  }
}
</script>
