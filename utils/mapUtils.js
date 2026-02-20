// utils/mapUtils.js
const CLUSTER_DISTANCE = 50; // 聚合像素距离

module.exports = {
	clusterMarkers: (markers, scale) => {
		const clusters = [];
		markers.forEach((marker, index) => {
			let isInCluster = false;
			clusters.forEach(cluster => {
				// 使用模块导出的方法
				if (module.exports.isMarkerInCluster(marker, cluster, scale)) {
					cluster.markers.push(marker);
					isInCluster = true;
				}
			});
			if (!isInCluster) {
				clusters.push({
					...marker,
					id: index, // 使用原始数据的数字id或索引
					iconPath: 'https://weapp-red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/marker-red.png',
					markers: [marker]
				});
			}
		});
		return clusters.map(c => ({
			...c,
			title: c.markers.length > 1 ? `${c.markers.length}` : ''
		}));
	},

	isMarkerInCluster: (marker, cluster, scale) => {
		const dx = Math.abs(marker.longitude - cluster.longitude) * 100000 * scale;
		const dy = Math.abs(marker.latitude - cluster.latitude) * 100000 * scale;
		return Math.sqrt(dx * dx + dy * dy) < CLUSTER_DISTANCE;
	}
};