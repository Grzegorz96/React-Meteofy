import * as THREE from "three";

/**
 * Converts latitude and longitude coordinates to Cartesian coordinates.
 * @param {number} lat - The latitude value in degrees.
 * @param {number} lon - The longitude value in degrees.
 * @param {number} radius - The radius of the sphere.
 * @returns {THREE.Vector3} The Cartesian coordinates as a THREE.Vector3 object.
 */
export function convertLatLonToCartesian(lat, lon, radius) {
    var phi = (90 - lat) * (Math.PI / 180);
    var theta = (lon + 180) * (Math.PI / 180);
    var x = -(radius * Math.sin(phi) * Math.cos(theta));
    var z = radius * Math.sin(phi) * Math.sin(theta);
    var y = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
}
